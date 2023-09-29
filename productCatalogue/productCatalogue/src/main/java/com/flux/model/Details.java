package com.flux.model;

/**
 * This class is used to create model entity and implement the required attributes.
 * 
 *
 */
public class Details {
	public long countUsers;
	public long countReviews;
	public long countPosts;

	public Details() {
		super();

	}

	public Details(long countUsers, long countReviews, long countPosts) {
		super();
		this.countUsers = countUsers;
		this.countReviews = countReviews;
		this.countPosts = countPosts;
	}

}
