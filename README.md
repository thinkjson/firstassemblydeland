## First Assembly Deland web site

First Assembly's web site uses Jekyll, which builds Markdown files into HTML staticly, and then serves on Github Pages.
The frontend functionality is driven by React, built by webpack.

### Text changes

Most text on the web site is driven by Markdown, which means you can edit it live on Github without running the server locally.
Simply navigate to the file (see \_pages and \_includes), click edit, make the changes you want, then commit those changes with
a message explaining why you are making the change. Every change leaves an audit trail, and if necessary can be rolled back.

### Promotions

The promotions on the home page are driven by Dropbox. To update a promotion, simply navigate to the FAD Promotions directory
in the church's Dropbox account, and overwrite the file you want to change (promo1, 2, and 3 respectively). If you delete the file,
or add another file with a different filename, it will not work. Dropbox likewise keeps an audit log, and changes are relatively
easy to roll back if necessary.

### First time setup

First install Jekyll and yarn

    https://jekyllrb.com/docs/installation/

Install dependencies (bundle for jekyll deps and yarn for ):

    bundle install
    yarn install --pure-lockfile

### Starting the server

    yarn start

This will run webpack in watcher mode, then start the jekyll livereload server. Changes to the code will be rebuilt,
and then reflected in the browser locally. By default the server runs on [http://localhost:4000](http://localhost:4000).

If you want to build static assets without running the server locally, you can simply run:

    yarn build

Every time webpack is run, it will generate a hash of the file's contents and include that in the built filename. If no changes
have occurred
