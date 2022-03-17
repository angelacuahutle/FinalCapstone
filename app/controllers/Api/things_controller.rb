class Api::ThingsController < ApplicationController
  def index
    # select 5 random things from db
    # @random_things = Thing.all.sample(5)
    render json: { things: [
      {
        name: 'some-thing',
        guid: '0415674d-a0e8-4748-af68-a5f53a05c453'
      }
    ] }.to_json
  end
end
