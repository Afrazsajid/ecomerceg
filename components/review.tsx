"use client";

import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewSection: React.FC = () => {
  const initialReviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing product! Highly recommend.",
      date: "2024-12-20",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Great quality but a bit pricey.",
      date: "2024-12-18",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name && newReview.rating > 0 && newReview.comment) {
      setReviews([
        ...reviews,
        {
          id: reviews.length + 1,
          ...newReview,
          date: new Date().toISOString().split("T")[0], // Client-side only
        },
      ]);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  return (
    <div className="w-full mx-auto sm:p-8">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
            <div className="flex items-center gap-8">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? (
                    <AiFillStar key={i} className="text-yellow-300" />
                  ) : (
                    <AiOutlineStar key={i} className="text-gray-400" />
                  )
                )}
              </div>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
            <p className="text-sm text-gray-400 mt-1">{review.date}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          className="w-full border p-3 rounded-md"
          required
        />
        <textarea
          placeholder="Your Review"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          className="w-full border p-3 rounded-md"
          rows={4}
          required
        ></textarea>
        <div>
          <p className="font-medium mb-2">Rating</p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                className={`text-2xl ${i < newReview.rating ? "text-yellow-500" : "text-gray-400"}`}
              >
                {i < newReview.rating ? <AiFillStar /> : <AiOutlineStar />}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="w-full bg-sky-500 text-white py-3 rounded-md">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewSection;
