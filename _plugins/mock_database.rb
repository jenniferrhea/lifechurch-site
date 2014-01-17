module Jekyll
  module MockDatabase
    def find_series(data, series_id)
      x = (data.select { |series| series["id"] == series_id }).first
    end
  end
end

Liquid::Template.register_filter(Jekyll::MockDatabase)