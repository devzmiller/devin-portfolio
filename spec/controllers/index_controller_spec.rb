require 'rails_helper'

describe IndexController, type: :controller do
  describe 'root' do
    it 'returns ok status' do
      get :index
      expect(response).to be_ok
    end
    it 'renders index view' do
      get :index
      expect(response).to render_template(:index)
    end
  end
end
