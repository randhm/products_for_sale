require 'sinatra'
require 'sinatra/reloader' if development?

get '/api/products' do
  [200, {"Content-Type" => "application/json"}, File.read('data.txt')]
end
