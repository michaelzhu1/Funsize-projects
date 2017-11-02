require_relative 'player.rb'
require 'Set'
require 'byebug'

class Game
  ALPHABET = Set.new('a'..'z')
  def initialize(*players)
    words = IO.readlines('dictionary.txt').map(&:chomp)
    @dict = Set.new(words)
    @players = players
    @fragment = ''
    @losses = Hash.new { |hash, player| hash[player] = 0 }
  end

  def run
    system("clear")
    print "Welcome to GHOST game"

    play_round until game_over?
    puts "#{self.current_player.name} lost"
  end

  def play_round
    until round_over?
      take_turn
    end
    update_score
  end

  def current_player
    @players[0]
  end

  def previous_player
    @players[-1]
  end

  def next_player!
    @players.push(@players.shift)
  end

  def take_turn
    new_letter = get_letter
    if valid_play?(new_letter)
      @fragment += new_letter

    else
      puts "Invalid letter, please try again"
      take_turn
    end
  end

  def valid_play?(string)
    return false unless ALPHABET.include?(string)
    new_fragment = @fragment + string
    @dict.any? { |word| word.start_with?(new_fragment) }
  end

  def get_letter()
    puts "The current word is #{@fragment}" if @fragment
    puts "Please enter a letter"
    gets.chomp
  end

  def game_over?
    @losses.values.any? { |losses| losses > 2 }
    byebug
  end

  def is_word?(word)
    @dict.include?(word)
  end

  def round_over?
    is_word?(@fragment)
  end

  def update_score
    @losses[self.current_player] += 1
  end
end


if __FILE__ == $PROGRAM_NAME
  mike = Player.new("mike")
  tom = Player.new("tom")
  game = Game.new(mike,tom)
  game.run
end
