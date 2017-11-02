require_relative 'player.rb'
require 'Set'
require 'byebug'

class Game
  ALPHABET = Set.new('a'..'z')
  def initialize(player1, player2)
    words = IO.readlines('dictionary.txt').map(&:chomp)
    @dict = Set.new(words)
    @player1 = player1
    @player2 = player2
    @fragment = ''
  end

  def run
    play_round until game_over?

  end

  def play_round

  end

  def current_player
    @player1
  end

  def previous_player
    @player2
  end

  def next_player!
    self.current_player, self.previous_player = self.previous_player, self.current_player
  end

  def take_turn(player)

  end

  def valid_play?(string)
    return false unless ALPHABET.include?(string)
    new_fragment = @fragment + string
    @dict.any? { |word| word.start_with?(new_fragment) }
  end
end


if __FILE__ == $PROGRAM_NAME
  mike = Player.new("mike")
  tom = Player.new("tom")
  game = Game.new(mike,tom)
  game.run
end
