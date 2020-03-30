module Jekyll
    class Promotion < Liquid::Tag
  
      def initialize(tag_name, text, tokens)
        super
        @text = text
        @src = tokens[0]
      end
  
      def render(context)
        "<div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'><img class='image-responsive' src='#{@src}' /></div>"
      end
    end
  end
  
  Liquid::Template.register_tag('promotion', Jekyll::Promotion)