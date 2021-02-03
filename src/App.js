import React from "react";
import "./App.css";
import "h8k-components";
import { useState, useEffect } from "react";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
	const [articles_1, setArticles] = useState([articles]);
	const [newArticle, setNewArticle] = useState();

	useEffect(() => {
		setArticles(newArticle);
		setNewArticle();
	}, [newArticle]);
	const mostUpvoted = () => {
		articles.sort((a, b) => {
			let item__a = a.upvotes;
			let item__b = b.upvotes;

			if (item__a > item__b) return -1;

			if (item__a < item__b) return 1;

			return 0;
		});
		setNewArticle(articles);
	};
	const mostRecent = () => {
		articles.sort((a, b) => {
			let item__a = a.date.toLowerCase();
			let item__b = b.date.toLowerCase();

			if (item__a > item__b) return -1;

			if (item__a < item__b) return 1;

			return 0;
		});
		setNewArticle(articles);
	};
	return (
		<div className='App'>
			<h8k-navbar header={title}></h8k-navbar>
			<div className='layout-row align-items-center justify-content-center my-20 navigation'>
				<label className='form-hint mb-0 text-uppercase font-weight-light'>
					Sort By
				</label>
				<button
					data-testid='most-upvoted-link'
					className='small'
					onClick={mostUpvoted.bind(articles)}
				>
					Most Upvoted
				</button>
				<button
					data-testid='most-recent-link'
					className='small'
					onClick={mostRecent.bind(articles)}
				>
					Most Recent
				</button>
			</div>
			<Articles articles={articles} />
		</div>
	);
}

export default App;
