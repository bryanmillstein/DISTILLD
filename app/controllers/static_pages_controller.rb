class StaticPagesController < ApplicationController
  before_filter :require_logged_in!

  def root

  end

end
