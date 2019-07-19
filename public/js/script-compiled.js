import React, { Component } from 'react';
import Card from "./Card.js";
import "./App.css";

let interactionData = {
	numReplies: 5,
	numRetweets: 9,
	numLikes: 10
};

let articleData = {
	title: "Learning React? Start Small.",
	text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
	imageURL: "./images/article-image.jpg"
};

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const posts = this.props.posts;
		const cardsList = posts.posts.map(post => React.createElement(Card, { username: post.username, displayName: post.displayName, date: post.date, postText: post.text, numbers: post.interactionData, articleData: post.articleData }));

		return React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"div",
				null,
				cardsList
			),
			React.createElement(
				"div",
				{ className: "credit" },
				"Icons made by ",
				React.createElement(
					"a",
					{ href: "https://www.flaticon.com/authors/hadrien", title: "Hadrien" },
					"Hadrien"
				),
				" from ",
				React.createElement(
					"a",
					{ href: "https://www.flaticon.com/", title: "Flaticon" },
					"www.flaticon.com"
				),
				" is licensed by ",
				React.createElement(
					"a",
					{ href: "http://creativecommons.org/licenses/by/3.0/", title: "Creative Commons BY 3.0", target: "_blank" },
					"CC 3.0 BY"
				)
			)
		);
	}
}

export default App;
import React, { Component } from 'react';
import './Article.css';

class Article extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return React.createElement(
      'div',
      { className: 'article-card' },
      React.createElement(
        'a',
        { className: 'card-link', href: '#' },
        React.createElement(
          'div',
          { className: 'article-image' },
          React.createElement('img', { className: 'image', src: this.props.articleData.imageURL })
        ),
        React.createElement(
          'div',
          { className: 'article-synopsis' },
          React.createElement(
            'div',
            { className: 'article-title' },
            this.props.articleData.title
          ),
          React.createElement(
            'div',
            { className: 'article-text' },
            this.props.articleData.text
          )
        )
      )
    );
  }
}

export default Article;

/*
credit for reply button: <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for envelope icon: <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for heart icon: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for retweet icon: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

credit for Hadrien icons: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/
import React, { Component } from 'react';
import './Card.css';
import Article from './Article';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(
        'div',
        { className: 'left-col' },
        React.createElement('div', { className: 'profile-picture' })
      ),
      React.createElement(
        'div',
        { className: 'right-col' },
        React.createElement(
          'div',
          { className: 'user-data' },
          React.createElement(
            'div',
            { className: 'display-name' },
            this.props.displayName
          ),
          React.createElement(
            'div',
            { className: 'username' },
            '@',
            this.props.username
          ),
          React.createElement(
            'div',
            { className: 'post-date' },
            '\xB7 ',
            this.props.date
          )
        ),
        React.createElement(
          'div',
          { className: 'post-text' },
          this.props.postText
        ),
        React.createElement(Article, { articleData: this.props.articleData }),
        React.createElement(
          'div',
          { className: 'buttons' },
          React.createElement(
            'a',
            { href: '#' },
            React.createElement('img', { className: 'button-icon reply-icon', src: './icons/speech-bubble.svg', alt: 'reply button' })
          ),
          React.createElement(
            'div',
            { className: 'numbers' },
            this.props.numbers.numReplies
          ),
          React.createElement(
            'a',
            { href: '#' },
            React.createElement('img', { className: 'button-icon retweet-icon', src: './icons/retweet.svg', alt: 'retweet' })
          ),
          React.createElement(
            'div',
            { className: 'numbers' },
            this.props.numbers.numRetweets
          ),
          React.createElement(
            'a',
            { href: '#' },
            React.createElement('img', { className: 'button-icon heart-icon', src: './icons/heart.svg', alt: 'like' })
          ),
          React.createElement(
            'div',
            { className: 'numbers' },
            this.props.numbers.numLikes
          ),
          React.createElement(
            'a',
            { href: '#' },
            React.createElement('img', { className: 'button-icon envelope-icon', src: './icons/envelope.svg', alt: 'direct message' })
          )
        )
      )
    );
  }
}

export default Card;

/*
credit for reply button: <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for envelope icon: <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for heart icon: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for retweet icon: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

credit for Hadrien icons: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

let postsData = {
	numposts: 3,
	posts: [{
		username: "timgrindall",
		displayName: "Timothy Grindall",
		text: "Testing 1 2 3 ...",
		date: "July 1st, 2019",
		articleData: {
			title: "Learning React? Start Small.",
			text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
			imageURL: "./images/article-image.jpg"
		},
		interactionData: {
			numReplies: 5,
			numRetweets: 9,
			numLikes: 10
		}
	}, {
		username: "jgrindog",
		displayName: "Jonathan Grindall",
		text: "Hello from Seattle!",
		date: "July 4th, 2019",
		articleData: {
			title: "Learning React? Start Small.",
			text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
			imageURL: "./images/article-image.jpg"
		},
		interactionData: {
			numReplies: 5,
			numRetweets: 9,
			numLikes: 10
		}
	}, {
		username: "graciannag",
		displayName: "Grace Grindall",
		text: "What's up?",
		date: "July 8th, 2019",
		articleData: {
			title: "Learning React? Start Small.",
			text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
			imageURL: "./images/article-image.jpg"
		},
		interactionData: {
			numReplies: 5,
			numRetweets: 9,
			numLikes: 10
		}
	}]
};

ReactDOM.render(React.createElement(App, { posts: postsData }), document.getElementById('root'));

/*
old component info passed to render method:
 <Card username="timgrindall" displayName="Timothy Grindall" date="July 17, 2019" postText="Learning React? Start Small." numbers={interactionData} articleData={articleData} />
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
