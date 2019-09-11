const stackOverflow = [
  {
    responses: [
      {
        body:
          'You forgot to invoke p5 in ngOnInit:\n\n p5 : any;\n ngOnInit() {\n  const sketch = (s) => {\n      debugger;\n      s.preload = () => {\n      }\n      s.setup = () => {\n       s.createCanvas(400,400);\n      };\n      s.draw = () => {\n         s.background(51);\n      };\n    }\n  this.p5 = new p5(sketch);\n}',
        author: 'Melchia',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: false,
    createdAt: 1566284203145,
    comments: [],
    variant: 'stackoverflow',
    postId: 54487805,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/54487805/p5-js-createcanvas-no-longer-rendering-ngoninit-const-not-being-accessed',
    author: 'Melchia',
    title:
      'p5.js createCanvas no longer rendering. ngOnInit const not being accessed',
    body:
      "My code used to work to render the canvas but now it doesn't. Main problem seems to be that I'm never accessing the sketch const. \n\nI had a decent little project up and running this morning but deleted it before I pushed without realizing it.\n\n    import { Component, OnInit } from '@angular/core';\n    import * as p5 from 'p5';\n\n    @Component({\n      selector: 'app-sketch',\n      templateUrl: './sketch.component.html',\n      styleUrls: ['./sketch.component.css']\n    })\n    export class SketchComponent implements OnInit {\n\n      constructor() { }\n\n      ngOnInit() {\n        const sketch = (s) => {\n          debugger;\n          s.preload = () => {\n          }\n          s.setup = () => {\n           s.createCanvas(400,400);\n          };\n          s.draw = () => {\n             s.background(51);\n          };\n        }\n      }\n    }\n\n\nThis should render a canvas 400x400, but instead, it does nothing.",
  },
  {
    responses: [
      {
        body:
          "If you want it available across the whole spec, just throw it at the top of the file.\n\nRSpec.describe Whatever do\n  context 'something' do\n    describe 'some function' do\n      context 'with new record' do\n        let(:mode) { create(:mode) }\n\n        ...\n\n        it 'returns similar letters if not an anagram' do\n          ...\n\n\nThen you don't have to keep declaring it. If that's what you're after.",
        author: 'cd-rum',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203150,
    comments: [
      {
        body: 'Is it antigram being defined somewhere?',
        targetMatch: false,
        author: 'Sebastian Palma',
      },
      {
        body: 'Yes should have clarified. Updated post.',
        targetMatch: true,
        author: 'colemars',
      },
      {
        body:
          "I meant in the spec. You've declared an antigram local variable within antigram_check but that won't be available moreover than the same class which it belongs to.",
        targetMatch: false,
        author: 'Sebastian Palma',
      },
    ],
    variant: 'stackoverflow',
    postId: 53347524,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/53347524/nameerror-undefined-in-rspec-when-trying-to-test-an-output-that-calls-a-variabl',
    author: 'colemars',
    title:
      'NameError: undefined in RSpec when trying to test an output that calls a variable located in the method',
    body:
      'https://gist.github.com/7wQvRTU2/3c95e82943d2640986fe6bf53a73cb01\n\nUnder: \n\ndescribe(\'#anagram_check\')\n\n\nI\'m trying to test:\n\n it("returns similar letters if not an anagram") do\n    testing = AnagramCheck.new("quick", "quack\'")\n    expect(testing.anagram_check()).to(eq("Not an Anagram or an Antigram but "\n    + (@word1 - antigram).join(\',\') + " " + "are alike")) \n    end     \n\n\nBut getting: \n\nNameError:\n   undefined local variable or method `antigram\' for \n   #<RSpec::ExampleGroups::AnagramCheck:0x007f97f11980d0>\n   # ./spec/anagram_test_spec.rb:20:in `block (2 levels) in <top (required)>\' \n\n\nFrom what I\'ve read it has something to do with scope? \n\nMaybe something involving let?\n\nHow do I format this in RSpec correctly so that I can test a method output that returns a variable from within the method?',
  },
  {
    responses: [
      {
        body:
          "The code in the post you provided converts a month into a season, it doesn't understand how to deal with a date string. \n\nIn order for your code to deal with a date string, you need to find a way to extract the date from your date string. One way of doing this is by using the Date ADT. The date class has many methods associated with it. One is getMonth(). This will allow you to get the month from your string. However, the getMonth() method returns an integer (where January = 0 and December = 12). Thus, you need to add 1 to your date. You also need to convert your number to a string for your switch statement's cases. You can do this by using .toString() on your calculate month.\n\nSee working example below:\n\n\n\nfunction getSeason() {\n  var date = new Date(document.forms.date.month.value);\n  var month = (date.getMonth()+1).toString();\n\n  var season = '';\n  switch (month) {\n    case '12':\n    case '1':\n    case '2':\n      season = 'winter';\n      break;\n    case '3':\n    case '4':\n    case '5':\n      season = 'spring';\n      break;\n    case '6':\n    case '7':\n    case '8':\n      season = 'summer';\n      break;\n    case '9':\n    case '10':\n    case '11':\n      season = 'fall';\n      break;\n  }\n  alert(season);\n}\n<form name=\"date\">\n  <input type=\"text\" name=\"month\" value=\"2018-05-20\" />\n  <input type=\"button\" value=\"Season?\" onClick=\"getSeason()\" />\n</form>",
        author: 'Nick Parsons',
        comments: [],
      },
      {
        body:
          "The function you're referencing requires a numerical month value to be passed in, not the whole date string. The simplest thing to do would be to specify the date format you want and then parse it yourself using something like split(). \n\nWorking example using the date format you provided with '2018-05-20'.\n\n\n\n    document.getElementById('button').addEventListener(\"click\", function(){\n         var month = document.getElementById('date').value.split('-')[1];\n        getSeason(month);\n\n      })\n      \t\n\n  function getSeason(month) {\n      var season = '';\n      switch(month) {\n          case '12':\n          case '01':\n          case '02':\n              season = 'winter';\n          break;\n          case '03':\n          case '04':\n          case '05':\n              season = 'spring';\n          break;\n          case '06':\n          case '07':\n          case '08':\n              season = 'summer';\n          break;\n          case '09':\n          case '10': \n          case '11':\n              season = 'fall';\n          break;\n      }\n      document.getElementById('result').innerHTML=season\n}\n<input type=\"text\" id=\"date\">\n<button id=\"button\" type=\"button\">Submit</button>\n<div id=\"result\">\n</div>",
        author: 'colemars',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: false,
    createdAt: 1566284203144,
    comments: [
      {
        body: 'What is not working ? where you are facing problem ?',
        targetMatch: false,
        author: 'Code Maniac',
      },
      {
        body: 'Can you please add your code',
        targetMatch: false,
        author: 'Nick Parsons',
      },
    ],
    variant: 'stackoverflow',
    postId: 54499720,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url: '/questions/54499720/changing-a-date-string-into-a-season',
    author: 'jesstp',
    title: 'Changing a date string into a season',
    body:
      "I need to write a JavaScript code that changes a date string (2018-05-20) into a season. I've been using this post as a reference, but when I enter the full date it doesn't work.\n\nJavascript coding: Input a specific date, Output the season\n\nAny suggestions would be really appreciate.\n\nThank you.",
  },
  {
    responses: [],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203132,
    comments: [
      {
        body:
          "I'm calling it in draw() and, in doing so, creating a new input field every tick. Causing all the issues you might expect that to cause. However, that doesn't explain why I lose access to .style().",
        targetMatch: true,
        author: 'colemars',
      },
      {
        body: 'Do you see any errors in your JavaScript console?',
        targetMatch: false,
        author: 'Kevin Workman',
      },
      {
        body:
          '@KevinWorkman no errors. Still not sure why lost access to .style() but I ended up just using JavaScript.',
        targetMatch: true,
        author: 'colemars',
      },
    ],
    variant: 'stackoverflow',
    postId: 54508169,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/54508169/createinput-doesnt-behave-as-expected-when-called-from-within-imported-model',
    author: 'colemars',
    title:
      "createInput() doesn't behave as expected when called from within imported model",
    body:
      "I'm trying to call createInput() from within an imported class, however, from within the class I lose access to input.style() and the dom element becomes non-responsive(can't click it). \n\nI imagine this is some sort of scope problem as calling createInput() on the same level as my canvas works without issue.\n\nFrom my canvas component:\n\n  s.setup = () => {\n      ...\n      search = new Search(s.width/2, s.height/3, 500, 1, world, s);\n      ...\n  }\n\n  s.draw = () => {\n      ...\n      search.show(s)\n      ...\n  }\n\n\nAnd my Search Model:\n\nexport class Search {\n    ...\n    show(p5) {\n       p5.push();\n       search = p5.createInput().addClass('search');\n       search.position(pos.x, pos.y);\n       search.style('width', this.width + 'px');\n       search.style('height', this.height + 'px');\n       p5.pop();\n    }\n}\n\n\nAnd to clarify, \n\n    search = s.createInput().addClass('search');\n    search.position(s.width/2-250, s.height/3);\n    search.style('width', '500px');\n    search.style('height', '40px');\n\n\nworks fine called directly from canvas component.",
  },
  {
    responses: [
      {
        body:
          "CENTER is inside your p5 instance, because you've imported all from @types/p5 as p5:\n\nconst p = new p5(...); // specify arguments for p5\n\nshow(p) {\n  p.rectMode(p.CENTER); // p.CENTER returns 'center'\n}",
        author: 'Vadi',
        comments: [
          {
            body:
              'The types file is actually separate from the p5.js file. I have a node_modules/@types/p5 and a node_modules/p5.js. My import statement is importing just the p5.js.',
            targetMatch: true,
            author: 'colemars',
          },
          {
            body:
              "@colemars your're right, but as you're using typescript, it gets all definition from @types/p5",
            targetMatch: false,
            author: 'Vadi',
          },
        ],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203142,
    comments: [],
    variant: 'stackoverflow',
    postId: 54501083,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/54501083/cannot-find-name-error-how-to-import-definitions-file-from-node-modules-types',
    author: 'colemars',
    title:
      'Cannot find name error - How to import definitions file from node_modules/@types in angular?',
    body:
      'So I have this node_modules/@types file with definitions I need. However, I can\'t seem to import it into my js file. \n\nI\'ve done npm install @types/p5 and added it to my tsconfig.json like:\n\n"types": [\n        "node",\n        "p5"\n     ], \n\n\nbut name is still not found. \n\nMy code is essentially this:\n\nimport * as p5 from \'p5\';\n//imports p5.js\n\nexport class Box { \n\n  ...\n\n  show(p5) {\n    p5.rectMode(CENTER);\n  {\n\n  ...\n\n}\n\n\nCENTER needs to be defined but it isn\'t.',
  },
  {
    responses: [
      {
        body:
          "You'll want to toggle IsStatic on your bodies.\n\nTo pause all objects you can run a for loop to set all your bodies.body.isStatic properties to True.  \n\nThen, on click event mouseDown you can do this.body.isStatic = false; and on mouseUp you can do this.body.isStatic = true;\n\nThis will allow you to manipulate your bodies and move them wherever you like until you do something like bodies.forEach(body) body.isStatic = false to allow your bodies to interact with your world again. \n\nKeep in mind this WILL retain physics properties, so you'll also want to reset the bodies velocity and momentum, etc, properties to what they were prior to the pause at some point. Either on unPause or on mouseUp.",
        author: 'colemars',
        comments: [
          {
            body: "ah, great! I hadn't thought of that. I'll give it a try.",
            targetMatch: false,
            author: 'MikeB',
          },
          {
            body:
              'If it worked out for you can you please mark my answer as correct? Thank you',
            targetMatch: true,
            author: 'colemars',
          },
        ],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: false,
    createdAt: 1566284203129,
    comments: [],
    variant: 'stackoverflow',
    postId: 54638457,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/54638457/matter-js-pause-physics-but-still-interact-with-objects',
    author: 'MikeB',
    title: 'Matter JS Pause physics but still interact with objects',
    body:
      "I'm looking to pause matter.js but still be able to manipulate objects. When I toggle runner.enabled, it disables all mouse constraints. I want to be able to pause the engine and move objects, then turn the physics back on. Any suggestions?",
  },
  {
    responses: [
      {
        body:
          "I just duplicate my answer here from Spectrum.\n\nFolder structure:\n\nconfig/\n    dev.json\n    test.json\n    prod.json\n    index.js\napi/\n    search.js\n\n\nconfig/index.js\n\nconst devConfig = require('../config/dev');\nconst testConfig = require('../config/test');\nconst prodConfig = require('../config/prod');\n\nconst { NOW_GITHUB_COMMIT_REF } = process.env;\nif (NOW_GITHUB_COMMIT_REF === 'test') \n  return testConfig;\nelse if (NOW_GITHUB_COMMIT_REF === 'master') \n  return prodConfig;\nelse\n  return devConfig;\n\n\napi/search.js\n\nconst config = require('../config');\n\n\nIn that case, master branch gets prod config, test branch - test config, all other branches - dev config.",
        author: 'vinfinit',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203077,
    comments: [],
    variant: 'stackoverflow',
    postId: 57543420,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url: '/questions/57543420/zeit-now-variable-secrets',
    author: 'colemars',
    title: 'ZEIT NOW variable secrets',
    body:
      "I'm looking for a way to refer to a different set of secrets(env variables) depending on the value of another env variable.\n\ni.e.\nif (process.env.STAGE === \"test\") return config = process.env.TEST_CONFIG\n\nI know that with automated github deployments there are included env variables\n\nBut how do I reference them correctly? For example: \n\nconst config = process.env.NOW_GITHUB_COMMIT_REF === 'master' ? prod : dev;\n\nDoesn't work for me. \n\n(NOW_GITHUB_COMMIT_REF:\nThe branch that the app was deployed using.)",
  },
  {
    responses: [
      {
        body:
          'Seems instead of importing p5 into my Box model I can pass my instance of p5 into the show method as such. \n\nFrom my component...\n\nconst sketch = (s) => {\n\n...\n\ns.draw = () => {\n   s.background(51);\n   // s.rect(box1.position.x, box1.position.y, 80, 80);\n   box1.show(s)\n };\n\n...\n\n\nAnd updated Box model show() method\n\n...\n\nshow(p5) {\n   let pos = this.body.position;\n   let angle = this.body.angle;\n\n   p5.push();\n   p5.translate(pos.x, pos.y);\n   p5.rect(0,0, this.w, this.h);\n   p5.pop();\n\n...',
        author: 'colemars',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203148,
    comments: [],
    variant: 'stackoverflow',
    postId: 54485277,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/54485277/p5-js-with-angularjs-help-creating-a-model-for-an-object-id-like-to-draw',
    author: 'colemars',
    title:
      "p5.js with angularjs - help creating a model for an object I'd like to draw",
    body:
      "I’d like to create a model for the objects I’m drawing but I’m struggling with how to do that in Angular. I know p5 methods aren’t recognized outside of specific functions but that seems to be what I need to do here?\n\nI’m attempting to follow along with The Coding Train here where he does something similar.\n\nI've tried putting the code into another draw() method inside of the box model but I don't believe that's the correct thing to do. \n\nimport * as Matter from 'matter-js';\nimport * as p5 from 'p5';\n\nexport class Box {\n\n ...\n\n  show() {\n\n       let pos = this.body.position;\n       let angle = this.body.angle;\n\n       p5.push();\n       p5.translate(pos.x, pos.y);\n       p5.rect(0,0, this.w, this.h);\n       p5.pop();\n\n ...\n\n\nI'd like to be able to export that into a component, instantiate a new box, and call .show() on it within my instanced draw() method.",
  },
  {
    responses: [
      {
        body:
          'Realized the solution right after I posted this:\n\nhttps://codesandbox.io/s/material-demo-w385h\n\nSet an IconAdornment variable to contain our InputProps when isSelected === true. \n\nOnFocus: setIsSelected(true) and OnBlur:setIsSelected(false).\n\n  const [isSelected, setIsSelected] = useState(false);\n\n  const iconAdornment = isSelected\n    ? {\n        startAdornment: (\n          <InputAdornment position="start">\n            <AccountCircle />\n          </InputAdornment>\n        )\n      }\n    : {};\n\n  return (\n    <TextField\n      className={classes.margin}\n      id="input-with-icon-textfield"\n      label="TextField"\n      InputProps={iconAdornment}\n      onFocus={e => setIsSelected(true)}\n      onBlur={e => setIsSelected(false)}\n    />\n  );',
        author: 'colemars',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203108,
    comments: [],
    variant: 'stackoverflow',
    postId: 57455028,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/57455028/make-material-ui-inputadornment-icon-only-visible-when-selected',
    author: 'colemars',
    title: 'Make Material-UI InputAdornment Icon only visible when selected?',
    body:
      'Is it possible to make the Material-UI Icon adornment in this sandbox (https://codesandbox.io/s/material-demo-w385h) only visible when the user selects the text field?\n\nCode: \n\n<TextField\n  className={classes.margin}\n  id="input-with-icon-textfield"\n  label="TextField"\n  InputProps={{\n    startAdornment: (\n      <InputAdornment position="start">\n        <AccountCircle />\n      </InputAdornment>\n    )\n  }}\n/>\n\n\nI\'m hoping for a clean solution that uses Material-UI props.',
  },
  {
    responses: [
      {
        body:
          'A workaround that can solve it will be adding a key to the Textbox so you force it to render a new element:\n\n<TextField\n  key="Confirmation Code"\n  variant="outlined"\n  margin="normal"\n  required\n  fullWidth\n  id="email"\n  label="Confirmation Code"\n  name="email"\n  autoComplete="confirmation code"\n/>',
        author: 'CD..',
        comments: [
          {
            body:
              "Works perfectly. Thank you. If you don't mind can you share what made you think to try adding a key?",
            targetMatch: true,
            author: 'colemars',
          },
          {
            body:
              'It looked like the Confirmation Code Textfield was rendered based on the previous Textfield. see Avoiding stateful components reuse with React keys',
            targetMatch: false,
            author: 'CD..',
          },
        ],
      },
      {
        body:
          'The workaround posted by CD above works - but this is indeed a bug.\n\nMore discussion, as well as other potential workarounds, can be found on the Github issue.\n\nhttps://github.com/mui-org/material-ui/issues/16833',
        author: 'colemars',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203105,
    comments: [],
    variant: 'stackoverflow',
    postId: 57455970,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/57455970/material-ui-textfield-outline-label-is-overlapping-with-border-when-conditionall',
    author: 'colemars',
    title:
      'Material-UI TextField Outline Label is overlapping with border when conditionally rendered',
    body:
      'https://codesandbox.io/s/material-demo-04y5b\n\nSteps to reproduce:\n\n\nClick "confirm" or "have a code?" to trigger a conditional render of a different form. \nClick the "Confirmation Code" TextField.\nNotice the border has rendered incorrectly and is causing the label to overlap with the border.\nFor correct behavior initialize newUser with a value other than Null and see that the border has rendered correctly to accommodate the label. \n\n\nAny idea why this is happening?',
  },
  {
    responses: [
      {
        body:
          'You should try to call promise() on the ManagedUpload in order to get a Promise and await its resolution:\n\nfor (const file of files) {\n  const params = {\n    Bucket: BUCKET_NAME,\n    Key: file.name,\n    Body: file.data\n  };\n  try {\n    const stored = await s3.upload(params).promise()\n    console.log(stored);\n  } catch (err) {\n    console.log(err)\n  }\n}\nconsole.log("leave loop")',
        author: 'antonku',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203111,
    comments: [],
    variant: 'stackoverflow',
    postId: 57420576,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/57420576/how-to-synchronously-upload-files-to-s3-using-aws-sdk',
    author: 'colemars',
    title: 'How to synchronously upload files to S3 using aws-sdk?',
    body:
      'I\'m attempting to upload files to my S3 bucket and then return out of my upload function. The problem is that I\'m returning out of the function before the upload returns the stored data. \n\nI\'ve attempted to use async/await with s3.upload, but I don\'t believe s3.upload is a promise so it doesn\'t do anything.\n\nex: \n\n   for (const file of files) {\n    const params = {\n      Bucket: BUCKET_NAME,\n      Key: file.name,\n      Body: file.data\n    };\n    const stored = await s3.upload(params, (err, data) => {\n      if (err) console.log("error", err, err.stack);\n      return console.log(data);\n    });\n    console.log(stored);\n   }\n   console.log("leave loop")\n\n\nI\'ve attempted using the Async utility module with async.each and async.eachSeries as referenced in this stack answer like so:\n\n  const saveFile = async file => {\n    const params = {\n      Bucket: BUCKET_NAME,\n      Key: file.name,\n      Body: file.data\n    };\n    s3.upload(params, (err, data) => {\n      if (err) console.log("error", err, err.stack);\n      console.log(data);\n    });\n  };\n\n  await async.eachSeries(files, saveFile, err => {\n    if (err) console.log(err);\n  });\n\n  console.log("leave loop")\n\n\nBut it is still hitting "leave" too soon. I\'m misunderstanding something but I\'m not sure what.\n\nUpdate:\n\ns3.upload returns a managedUpload object - that seems to be why await is triggering early. The callback is triggered when managedUpload is resolved/completed. \n\nSo is there a way to await the completed object instead of managedUpload?',
  },
  {
    responses: [
      {
        body:
          'The <MarkerClusterer> component requires a function as its child prop. That function will be called by the <MarkerClusterer> component\'s render function. In the second case, you are passing an array as the child prop. Hence the MarkerClusterer is trying to invoke your array as a function (testArray()) and hence failing.\n\nthis should work\n\n<MarkerClusterer\n  options={{\n    imagePath:\n      "https://developers.google.com..."\n  }}\n>\n  {clusterer =>\n    listings.map((location, i) => (\n      <Pin key={i} position={location} clusterer={clusterer} />\n    ))\n  }\n</MarkerClusterer>\n\n\nThis is known as render props in the react world. Read here for more details.',
        author: 'johnny peter',
        comments: [
          {
            body: '@colemars did this answer help?',
            targetMatch: false,
            author: 'johnny peter',
          },
        ],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203126,
    comments: [],
    variant: 'stackoverflow',
    postId: 56588359,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/56588359/this-props-children-is-not-a-function-when-trying-to-cluster-markers-from-array',
    author: 'colemars',
    title:
      'this.props.children is not a function when trying to cluster markers from array using @react-google-maps',
    body:
      "I'm trying to take an array of objects with lat/long points and create a Marker for each, and then pass those Markers into a <MarkerClusterer> component. \n\nBy copying straight off the docs here I can make it work. However, their approach is a bit different from what I need.\n\nThe difference seems to be with how the points are mapped to the component. \n\nWorking code: \n\n<MarkerClusterer\n      options={{imagePath:\"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m\"}}\n    >\n      {\n        (clusterer) => [\n          {lat: -31.563910, lng: 147.154312},\n          {lat: -33.718234, lng: 150.363181},\n          {lat: -33.727111, lng: 150.371124},\n          {lat: -33.848588, lng: 151.209834}\n        ].map((location, i) => (\n          <Marker\n            key={i}\n            position={location}\n            clusterer={clusterer}\n          />\n        ))\n      }\n    </MarkerClusterer>\n\n\nMy non-working code:\n\nconst listings = [\n    { lat: -31.56391, lng: 147.154312 },\n    { lat: -33.718234, lng: 150.363181 },\n    { lat: -33.727111, lng: 150.371124 },\n    { lat: -33.848588, lng: 151.209834 },\n  ];\n  let testArray = [];\n  for (let i = 0; i < listings.length; i++) {\n    let location = listings[i];\n    testArray.push(\n      <Pin position={location} id={i} key={i} clusterer={listings} />\n    );\n  }\n...\n\n <MarkerClusterer>\n    {testArray}\n </MarkerClusterer>\n\n\nAnd here is a codesandbox with an example. Code is under Map2.js and the difference is at line 61. \n\nI can't figure out what the first approach is doing that I'm not. Maybe the clusterer reference? Any help in that area will be greatly appreciated.",
  },
  {
    responses: [
      {
        body:
          'The problem is that your anchor tags <a> are out of <tr> family. You have to bring them inside <td> so they become children of <tr>\n\n\n\n$(document).ready(function(){\n    $(\'.items > tbody > tr\').click(function() {\n        var src = $(this).find(\'a[title="View"]\').attr(\'src\');\n        alert (src)\n    });\n});\ntr{\n  background:#ff8800;\n  height:40px;\n}\ntable{\n  width:100%;\n}\n<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\n<table class="items">\n<tbody>\n    <tr>\n        <td></td>   \n        <td></td>   \n        <td></td>   \n        <td></td>\n        <td>\n          <a title=\'View\' src="main.php"></a> \n          <a title=\'find\' src="index.php"></a>\n        <td>\n    </tr>\n</tbody>',
        author: 'Ali Sheikhpour',
        comments: [],
      },
      {
        body:
          'My guess would be that your this is out of scope. \n\nTry passing scope into your function like so:\n\n\n\n$(document).ready(function(){\n    $(\'.items > tbody > tr\').click(() => {\n        var src = $(this).find(\'a[title="View"]\').attr(\'src\');\n        alert (src)\n    });\n});\ntr{\n  background:#ff8800;\n  height:40px;\n}\ntable{\n  width:100%;\n}\n<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\n<table class="items">\n<tbody>\n        <td></td>   \n        <td></td>   \n        <td></td>  \n          <a title=\'View\' src="main.php"></a> \n          <a title=\'find\' src="index.php"></a>\n        <td></td>\n        <td></td>\n</tbody>',
        author: 'colemars',
        comments: [
          {
            body: 'See expanded code. This solution most definitely works.',
            targetMatch: true,
            author: 'colemars',
          },
        ],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: false,
    createdAt: 1566284203133,
    comments: [
      {
        body: 'Please post more html including .items class.',
        targetMatch: false,
        author: 'Ali Sheikhpour',
      },
    ],
    variant: 'stackoverflow',
    postId: 54500979,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url: '/questions/54500979/alert-an-src-by-clicking-a-button-in-jquery',
    author: 'Hamed Dehghan',
    title: 'alert an src by clicking a button in jquery',
    body:
      "this is my jquery code; but it gives me (undefined).\n\n$(document).ready(function(){\n    $('.items > tbody > tr').click(function() {\n        var src = $(this).find('a[title=\"View\"]').attr('src');\n        alert (src)\n    });\n});\n\nthe HTML code is :\n\n<table class=\"items\">\n<tbody>\n    <tr>\n        <td></td>   \n        <td></td>   \n        <td></td>   \n        <td></td>\n        <a title='View' src=\"main.php\"></a> \n        <a title='find' src=\"index.php\"></a>    \n    </tr>\n</tbody>",
  },
  {
    responses: [
      {
        body:
          "I can't understand your saying Works but is wrong but Charity Navigator Data API request the sending app_id and app_key keys through the parameters, not header. \n\nYour first code looks correct.\n\nSecond code, app_key key was sent by header, not params. So API response 403.\n\nThird code, coded with httpart gem, dose not use parameters but headers. So Charity Navigator Data API response Authentication parameters missing error. It's normal.\n\nrequire 'httparty'\n\nclass StackExchange\n  include HTTParty\n  base_uri 'https://api.data.charitynavigator.org/v2/'\n\n  def posts\n    options = { \n      query: {\n        app_id: '2b1ffdad',\n        app_key: 'XXXX'\n      }\n    }\n\n    self.class.get(\"/Organizations/\", options)\n  end\nend\n\ncharity = Charity.new\nputs charity.posts\n\n\nBut you can use parameters by query option in httparty. Read the httparty docs and this SO. And you can use parameters options in rest-client gem, too. And I recommend use it strongly.",
        author: 'Penguin',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203149,
    comments: [],
    variant: 'stackoverflow',
    postId: 53843493,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/53843493/restclient-httparty-authentication-parameters-not-being-used',
    author: 'colemars',
    title: 'RestClient/HTTParty authentication parameters not being used',
    body:
      "For API call I've tried..\n\nIn RestClient\n\nWorks but is wrong:\n\nresponse = RestClient::Request.execute(\nmethod: :get,\nurl: 'https://api.data.charitynavigator.org/v2/Organizations?app_id=2b1ffdad&app_key=XXXX',\n)\n\n\nDoesn't Work (403: Forbidden):\n\nresponse = ::RestClient::Request.execute(method: :get, url: 'https://api.data.charitynavigator.org/v2/Organizations?app_id=2b1ffdad', \nheaders: {app_key: 'XXXX'})\n\n\nIn HTTParty\n\nAlso doesn't work (Authentication parameters missing):\n\nrequire 'rubygems'\nrequire 'httparty'\n\n\nclass Charity\n  include HTTParty\n\n  base_uri 'https://api.data.charitynavigator.org/v2/'\n\n  def posts\n\n    headers = {\n      \"app_id\"  => \"2b1ffdad\",\n      \"app_key\"  => \"XXXX\"\n    }\n\n    self.class.get(\"/Organizations/\",\n    :headers => headers\n    )\n  end\nend\n\n\ncharity = Charity.new\nputs charity.posts\n\n\nFor reference: https://charity.3scale.net/docs/data-api/reference\n\nIs it syntax? I've also looked into Faraday but ran into similar issues there. Many 3rd party API examples with rails seem to be using long outdated APIs so it's been hard piecing everything together. \n\nAny insight would be greatly appreciated. Really want to understand this.",
  },
  {
    responses: [],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203125,
    comments: [],
    variant: 'stackoverflow',
    postId: 56657894,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url: '/questions/56657894/how-to-import-svg-file-to-use-in-image-path',
    author: 'colemars',
    title: 'How to import SVG file to use in image path?',
    body:
      'I\'m importing a PNG image and passing it to an external component (@react-google-maps) to use as an icon. PNG import works fine, but the SVG file does not. \n\nI\'ve never worked with SVGs before so I must be misunderstanding something.\n\nMight I be handling\n\nimport testSVG from \'./assets/m3.svg\'\n\n\nincorrectly?\n\nYou can see in my example here that under map2:67 using testPNG works but testSVG does not.\n\nThis is where @react-google-maps plugs the path into an <img> tag:\n\nimg = "<img src=\'" + this.url + "\' style=\'position: absolute; top: " + spriteV + "px; left: " + spriteH + "px; "\n\n      //@ts-ignore\n      if (!this.cluster.getClusterer().enableRetinaIcons) {\n        img += "clip: rect(" + (-1 * spriteV) + "px, " + ((-1 * spriteH) + this.width) + "px, " +\n          ((-1 * spriteV) + this.height) + "px, " + (-1 * spriteH) + "px);"\n      }\n\n      msg += "\'>"\n\n\nHowever, I don\'t believe that is causing an issue, because non-local SVG files work just fine.',
  },
  {
    responses: [],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203123,
    comments: [
      {
        body: 'Do you have a parent component BrowserRouter for your app?',
        targetMatch: false,
        author: 'Shashank Kadne',
      },
      {
        body: 'I do. My app is wrapped in <BrowserRouter> in my index.',
        targetMatch: true,
        author: 'colemars',
      },
      {
        body:
          "I missed the 'push' value for Redirect in the documentation.  stackoverflow.com/questions/48731207/…",
        targetMatch: true,
        author: 'colemars',
      },
    ],
    variant: 'stackoverflow',
    postId: 57130643,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/57130643/browser-back-button-isnt-getting-history-after-redirect-with-react-router-dom',
    author: 'colemars',
    title:
      "Browser back button isn't getting history after Redirect with react-router-dom",
    body:
      'Routes look like:\n\n    <Route path="/" exact component={Landing} />\n    <Route path="/Buyer" exact component={Buyer} />\n    <Route path="/Seller" exact component={Seller} />\n\n\nAnd inside of Landing I have a conditional Redirect that redirects to either buyer or seller which flows like:\n\n<Button fluid onClick={this.routeChange}>Seller</Button>\n\nrouteChange(e) {\n   this.setState({navigateTo: `/${e.target.textContent}`})\n}\n\nif (this.state.navigateTo.length > 0) {\n   return <Redirect to={this.state.navigateTo} />\n}\n\n\nThis works. But, after I redirect, if I hit the back button it seems I have no history of having been at my "/" route. So my back button takes me to wherever I was before that. \n\nWhat am I missing here?',
  },
  {
    responses: [
      {
        body:
          'I gave it a go and came up with this. It\'s somewhat rudimentary, but it think it can help as a starting point.\n\n\n\nclass BuildingBlock{\n\tconstructor(x, y, size, color){\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t\tthis.size = size;\n\t\tthis.color = color || \'red\';\n\t\tthis.display();\n\t}\n\n\tdisplay(){\n\t\tfill(this.color);\n\t\trect(this.x, this.y, this.size, this.size);\n\t}\n}\n\nclass Polyomino{\n\tconstructor(x, y, shape, blockSize){\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t\tthis.shape = shape;\n\t\tthis.blockSize = blockSize;\n\t}\n\n\tdisplay(){\n\t\tfor(let i = 0; i < this.shape.length; i++)\n\t\t\tfor(let j = 0; j < this.shape[i].length; j++)\n\t\t\t\tif(this.shape[i][j] === 1)\n\t\t\t\t\tnew BuildingBlock(this.x + (j*this.blockSize), this.y + (i*this.blockSize), this.blockSize);\n\t}\n}\n\nfunction setup(){\n\tcreateCanvas(400, 400);\n\tbackground(125);\n\n\tlet pmShape = [\n\t\t[1, 1, 0, 1],\n\t\t[0, 1, 0, 1],\n\t\t[0, 1, 0, 1],\n\t\t[1, 1, 1, 1],\n\t]\n\tlet  p = new Polyomino(20, 20, pmShape, 30);\n\tp.display();\n\n        let tmShape = [\n            [1, 1, 0],\n            [0, 1, 1]\n        ];\n        let tetromino = new Polyomino(200, 20, tmShape, 50);\n        tetromino.display();\n}\n<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>\n</head>\n<body>\n\t\n</body>\n</html>\n\n\n\n\nThe polyomino class should be able to handle the subset of tetrominoes; just define the shapes as matrices.',
        author: 'Julian',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203131,
    comments: [],
    variant: 'stackoverflow',
    postId: 54560002,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/54560002/using-p5-js-is-it-possible-to-draw-a-class-that-draws-sub-classes-within-itself',
    author: 'colemars',
    title:
      'Using p5.js, is it possible to draw a class that draws sub-classes within itself? For example, a 4x4 block made up of 1x1 blocks',
    body:
      "I'm attempting to make a Tetris-like game, where the game's pieces are all made up of smaller pieces that share properties. \n\nCurrently I have:\n\n    export class SquareTetromino {\n      [x: string]: any;\n      constructor(x, y, w, h) {\n      ...\n      }\n\n      show(p5) {\n         p5.push();\n         p5.translate(this.posX, this.posY);\n         p5.fill(\"#D8B6FF\")\n         p5.rect(0,0,this.w, this.h);\n         p5.pop();\n\n      }\n     ...\n    }\n\n\nand:\n\n    export class BlockTetromino {\n      [x: string]: any;\n      constructor(x, y, w, h) {\n      ...\n      }\n\n      test(p5) {\n          this.testArray.push(new SquareTetromino(this.posX,this.posY,this.w,this.h));\n          this.testArray.push(new SquareTetromino(this.posX - 50,this.posY,this.w,this.h));\n          this.testArray.push(new SquareTetromino(this.posX - 50,this.posY + 50,this.w,this.h));\n          this.testArray.push(new SquareTetromino(this.posX,this.posY + 50,this.w,this.h));\n      }\n\n      show(p5) {\n          p5.push();\n          this.testArray.forEach((block) => {\n            block.show(p5)\n          })\n          p5.pop();\n\n      }\n    }\n\n\nAnd from my main component:\n\n  s.setup = () => {\n\n  ...\n\n            bodies.push(new BlockTetromino(200,-50,50,50))\n            bodies[0].test(s);\n  ...\n          }\n\n  s.draw = () => {\n         ...\n\n\n          for (let i = 0; i < bodies.length; i++) {\n            bodies[i].show(s)\n          }\n\n\nI'd like to be able to have a class Block which draws a small block, and then call that Block within a class Square, which draws 4 small blocks. Then, by instantiating Square I'll have 4 blocks chained together as one object. \n\nI think I'm missing a for loop somewhere.",
  },
  {
    responses: [
      {
        body:
          "You can use Cloudformation intrinsic function Sub to create index arn\n\n!Sub '${ReportsTable.Arn}/index/*'",
        author: 'Igor Marcelo',
        comments: [],
      },
      {
        body:
          "After referring to these docs: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)\n\nand these: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/api-permissions-reference.html\n\nI was able to figure out that the required format for referencing an index table is arn:aws:dynamodb:region:account-id:table/table-name/index/*. \n\nFurther, in order to not hard code all the values in (in my case because I have several staging environments) you can do a join like so:\n\n        Fn::Join:\n          - ''\n          -\n            - 'arn:aws:dynamodb:'\n            - Ref: AWS::Region\n            - ':'\n            - Ref: AWS::AccountId\n            - ':table/'\n            - ${self:custom.tableName}/\n            - 'index/*'\n\n\nWhere table name is defined in your custom block.",
        author: 'colemars',
        comments: [
          {
            body:
              "FYI, unless you're doing manipulation on the Join components, or importing them, you can generally use a Sub instead of a Join, which makes things easier to read: !Sub arn:aws:dynamodb:${AWS::Region}:${AWS::AccountId}:table/${self:custom.tableName}/index/*",
            targetMatch: false,
            author: '404',
          },
        ],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203118,
    comments: [
      {
        body:
          'arn:aws:dynamodb:region:account-id:table/table-name/index/* is the correct reference.  Now I need to figure out how to dynamically refer to the tablename like is being done above. And probably how to refer to my account id and region without hardcoding.',
        targetMatch: true,
        author: 'colemars',
      },
    ],
    variant: 'stackoverflow',
    postId: 57301087,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/57301087/how-to-reference-secondary-indexes-in-serverless-yml',
    author: 'colemars',
    title: 'How to reference secondary indexes in serverless.yml?',
    body:
      "I'm very unclear on how references or variables work with CloudFormation. \n\nCurrently my iAmRole in my serverless.yml looks like:\n\n  iamRoleStatements:\n    - Effect: Allow\n      Action:\n        - dynamodb:DescribeTable\n        - dynamodb:Query\n        - dynamodb:Scan\n        - dynamodb:GetItem\n        - dynamodb:PutItem\n        - dynamodb:UpdateItem\n        - dynamodb:DeleteItem\n      # Restrict our IAM role permissions to\n      # the specific table for the stage\n      Resource:\n        - \"Fn::GetAtt\": [ ReportsTable, Arn ]\n\n\nReportsTable is a table created in another file that looks like:\n\nResources:\n  ReportsTable:\n    Type: AWS::DynamoDB::Table\n    Properties:\n    ...\n    LocalSecondaryIndexes:\n        - IndexName: typeId-accessToken-index\n          KeySchema:\n          - AttributeName: typeId\n            KeyType: HASH\n            ...etc\n\n\nI understand that the second value in the Fn::GetAtt array is referencing an attributename, but I don't understand where Arn is coming from. It seems like a variable but it's not defined anywhere.\n\nUltimately I need to add another Effect, Action, Resource block referencing the local secondary index I have created, but I'm lost as to where to start.\n\nEdit: Looks like Arn comes from dynamoDB tables return values (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)\n\nEdit2: Okay so I now have the format arn:aws:dynamodb:region:account-id:table/table-name/index/* from the permissions reference docs, testing now.",
  },
  {
    responses: [
      {
        body:
          'You can use chrome-aws-lambda to either package chrome with your Lambda or create a Lambda Layer to avoid the package size.\n\nI did something similar here based on chrome-aws-lambda',
        author: 'Erez',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203110,
    comments: [],
    variant: 'stackoverflow',
    postId: 57408181,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/57408181/how-to-bundle-headless-chromium-module-with-aws-lambda',
    author: 'colemars',
    title: 'How to bundle headless chromium module with AWS Lambda?',
    body:
      "I'm attempting to use Puppeteer with Lambda, however, on serverless deploy, the lambda errors out due to exceeding the 250mb unbundled package size limit. \n\nSo, to get under the limit, I've switched to Puppeteer core which doesn't come packaged with chromium. This requires referencing a path to an executable to launch chrome. (e.g. puppeteer.launch({executablePath: headlessChromiumPath}));\n\nHowever, I'm not sure how to load a headless Chromium into my container so that I can later reference it.\n\nTo solve this I'm trying a couple of things:\n\nFirst, I've downloaded a binary headless chromium and I've included it into my API. \n\nFile structure: \n\n-run-puppeteer.js    \n-headless_shell.tar.gz\n\n\nReferenced like:\n\nconst browser = await puppeteer.launch({\n    executablePath: \"../headless_shell.tar.gz\"\n  });\n\n\nHowever, I can't import or require it so my lambda doesn't recognize that it exists and doesn't include it in my deployment package. \nMy question here is how do I correctly include the headless file into my API so that I can reference it from within this lambda?\n\nIf that isn't an option - I see that I can upload the binary to S3 and then download it on container startup. Any references on where to begin tackling this would be much appreciated.",
  },
  {
    responses: [
      {
        body:
          "Array.map() allows dynamic rendering of elements in React, so that only those who change their props will re-render (as explained in the documentation).\n\nIf you'll use this method - rather than create the full array and render it fully - React will only re-render elements that are supposed to be updated:\n\nprops.images.map((imageFile, index) => {\n    let objectURL = URL.createObjectURL(imageFile);\n\n    const newStyles = { \n      left: `${leftPosition}%`,\n      top: `${topPosition}%`\n    }\n\n    return (\n      <div className=\"Preview\" style={{...style, ...newStyles}} key={index}></div>\n    )\n});\n\n\nNote that I've modified the key property of each element in the array. It should be unique and I didn't know what v4() is, so I just used the array indices.\nReact's documentation actually explains really well about these:\n\n\n  Keys help React identify which items have changed, are added, or are removed",
        author: 'GalAbra',
        comments: [
          {
            body:
              "I threw up an example - unless I'm doing it wrong it seems that method still re-renders entire list.  codesandbox.io/s/brave-mcnulty-0rrjz (relevant code in Preview.js)",
            targetMatch: true,
            author: 'colemars',
          },
          {
            body:
              "I don't understand what your code does, so it's hard to reproduce. Did you try adding console.log to each of the map's inner functions?",
            targetMatch: false,
            author: 'GalAbra',
          },
          {
            body:
              "That link has a minimal example in it so you hopefully don't have to reproduce it.  What would I be looking for in the logs?",
            targetMatch: true,
            author: 'colemars',
          },
          {
            body:
              '@colemars The amount of times the code is being executed, hence the amount of elements being re-rendered.',
            targetMatch: false,
            author: 'GalAbra',
          },
          {
            body:
              "it's expected that <Preview> is still re-render. so Virtual DOM is generated to compare with. but DOM should be updated only for single image(if you provide proper key - and you do).",
            targetMatch: false,
            author: 'skyboyer',
          },
        ],
      },
      {
        body:
          "Your answer is with 'key' property of react components. It's built for such cases\nAssuming this is render part of your component, you should have something like this:\n\nreturn this.props.images.map(imageFile => (\n    <div className=\"Preview\" key={imageFile}></div>\n))\n\n\nAssuming imageFile is a unique string. This way react will rerender your virtual dom but it'll recognise that there is no need to dom update for same elements with same key property",
        author: 'Doğancan Arabacı',
        comments: [
          {
            body:
              'I updated it here(codesandbox.io/s/brave-mcnulty-0rrjz) but it still seems they are all re-rendering. Notice the white flash on all images when a new image is added.',
            targetMatch: true,
            author: 'colemars',
          },
          {
            body:
              "Now checking your copepen, I see the issue. I believe you should use regular img element to stop flickering. Because with key properties, react doesn't render it. I'm not sure where flicker comes from but, if you just change your div to img and give appropriate src, it just works without flickering",
            targetMatch: false,
            author: 'Doğancan Arabacı',
          },
        ],
      },
      {
        body:
          "So thanks to Dergash on Github I've discovered that the problem is not that my list is re-rendered. \n\nBecause I am creating a new URL every time with URL.createObjectURL inside of my component and because 'backgroundImage' does not do image prefetching whereas src attribute does I am seeing the flicker.\n\nSo my mistake was not creating the URL first and then passing it down into the component.\n\nWorking example: https://codesandbox.io/s/funny-http-8vrgv\n\nMore details: https://github.com/facebook/react/issues/16187",
        author: 'colemars',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: true,
    createdAt: 1566284203112,
    comments: [],
    variant: 'stackoverflow',
    postId: 57164269,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/57164269/how-to-dynamically-render-list-of-components-without-re-rendering-entire-list-wi',
    author: 'colemars',
    title:
      'How to dynamically render list of components without re-rendering entire list with every new addition?',
    body:
      'I want to render a list of components that have a 1:1 relationship with some objects in my redux store.\n\nMy current code is:\n\n  props.images.forEach(imageFile => {\n    let objectURL = URL.createObjectURL(imageFile);\n\n    const newStyles = { \n      left: `${leftPosition}%`,\n      top: `${topPosition}%`\n    }\n\n    previewFloats.push(\n      <div className="Preview" style={{...style, ...newStyles}} key={v4()}></div>\n    )\n  });\n\n  return(\n    previewFloats\n  )\n\n\nEdit: Example here (codesandbox.io/s/brave-mcnulty-0rrjz)\n\nThe problem being that performance takes a pretty big hit rendering an entire list of background images as the list grows. \n\nWhat is a better way to achieve this?\n\nEdit: still unsure why background-image src is triggering a re-render, but the suggestion to use an <img> element instead has things working as intended.',
  },
  {
    responses: [
      {
        body:
          "why not just use w or h, why assign \"this.w\" to w and \"this.h\" to h\n\n\nthis allows the w and h to be properties of the Box. After, if you were to say \n\nbox1 = new Box(10,10,10,10)\nconsole.log(box1.w, box1.h)\n\n\nyou would be able to see and manipulate those properties. Because your rectangle is using these properties to draw itself if you manipulate those properties the drawing of your rectangle will change as well. \n\n\n  i am confused by the push(). why is nothing in the parenthesis? what is it adding by default?\n\n\nI believe you're looking at code utilizing the p5.js library. push() and pop() in p5.js access the draw state. Essentially, push() is 'begin drawing' and pop() is 'stop drawing'. So, here they access the draw state, draw a rectangle, and then close the draw state. \n\nYou can read more on p5's documentation.",
        author: 'colemars',
        comments: [],
      },
    ],
    userId: 'e6dce7ff-8697-42b3-9d65-95e44593b768',
    targetMatch: false,
    createdAt: 1566284203128,
    comments: [
      {
        body: 'Share the implementations of push() and pop().',
        targetMatch: false,
        author: 'Amy',
      },
      {
        body:
          "push and pop are often used by graphics libraries to control the mutations of what's being drawn. The push pushes a new transformation to be applied, the translate transformation happens, the rect is drawn with the current transformations, then pop pops (removes) the current transformation so it doesn't effect anything else being drawn.",
        targetMatch: false,
        author: 'Carcigenicate',
      },
      {
        body:
          'Since show() is not on the prototype, initializing w and h on the instance offers no benefit here (other than making them mutable outside the constructor). Typically member methods should be defined like Box.prototype.show = function () { ... }; outside the constructor, in which case initializing w and h on the instance would be necessary.',
        targetMatch: false,
        author: 'Patrick Roberts',
      },
      {
        body:
          'this keyword refers to the object it belongs to. Here we cant use w or h because they are just local variables of a function Box or we can say they have block level scoping and therefore they cant be used outside that block.',
        targetMatch: false,
        author: 'Shubham Jain',
      },
    ],
    variant: 'stackoverflow',
    postId: 54636764,
    profileUrl: 'https://stackoverflow.com/users/10606984/colemars',
    url:
      '/questions/54636764/understanding-matter-js-code-for-box-this-push-and-pop',
    author: 'hc_dev',
    title: 'Understanding matter.js code for Box: this, push and pop',
    body:
      'I am new to JavaScript and having a difficult time understanding the following code snippet intuitively.  It is code used to make a box in some physics engine (matter.js)\n\nfunction Box(x, y, w, h){\n    this.body = Bodies.rectangle(x,y,80,80);\n    this.w = w;\n    this.h = h;\n    World.add(world, this.body)\n\n    this.show = function(){\n        var pos = this.body.position;\n        var angle = this.body.angle;\n\n        push();\n        translate(pos.x, pos.y);\n        rect(0,0,this.w,this.h);\n\n        pop();\n    }\n}\nbox1 = new Box(200,100,50,50)\nfunction draw() {\nbackground(51);\nbox1.show();\n\n}\n\n\nMy questions are this:\n\n\nwhy not just use w or h, why assign "this.w" to w and "this.h" to h\ni am confused by the push(). why is nothing in the parenthesis? what is it adding by default?\nsame thing with the pop().  What is it removing?',
  },
];

export default stackOverflow;
