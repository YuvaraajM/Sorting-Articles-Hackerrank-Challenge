import React from "react";

function Articles({ articles }) {
	return (
		<div className='card w-50 mx-auto'>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Upvotes</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{/* <tr data-testid='article' key='article-index'>
						<td data-testid='article-title'>Article 1 title</td>
						<td data-testid='article-upvotes'>Article 1 title</td>
						<td data-testid='article-date'>Article 1 title</td>
					</tr> */}
					{articles.map((article, id) => {
						return (
							<tr data-testid='article' key={id}>
								<td data-testid='article-title'>{article.title}</td>
								<td data-testid='article-upvotes'>{article.upvotes}</td>
								<td data-testid='article-date'>{article.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Articles;
