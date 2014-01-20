module Jekyll
  module Filters
    def find_first(input, key, value)
      (input.select { |object| object[key] == value }).first
    end
  end
end

Liquid::Template.register_filter(Jekyll::Filters)