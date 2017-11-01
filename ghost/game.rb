require_relative 'player.rb'

class Game
  def initialize(player1, player2)
    @player1 = player1
    @player2 = player2
    @fragment = nil
    @dict = nil
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

  end
end
