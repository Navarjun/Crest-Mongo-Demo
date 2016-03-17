# Crest-Mongo-Demo
This is a demo for Crest Mongo Interface

### How to use
1. ##### Run the [Crest Mongo Interface](https://github.com/cordazar/crest) on port 3500(default) to use the demo
    * Just clone/download Crest
    * Run `npm install` in Crest folder
    * Run `npm start` in Crest folder

2. ##### Start a server for this project
    * Clone/Download this project
    * Start a server on this folder
      * I use `python -m SimpleHTTPServer` to serve the files from a directory

3. Open file `scripts/script.js`
    * Set variable `dbName`
    * Set variable `collectionName`
    * Set query in `getDataWithQueryEQUALSTO()` method and `getDataWithQueryINRANGE()` (_these methods provide you with template queries, just match the name of columns with the names in your collection_)

This is not intended to be a full-featured tutorial, just a demo of "How to use Crest from front-end js only".
