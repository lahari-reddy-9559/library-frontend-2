import React from 'react';
import Card1 from './Card1.jsx';

export default function Body({ courses }) {
  return (
    <div className="row">
      {courses.map((book, index) => (
        <div className="col-md-6" key={book._id || book.isbn || index}>
          <Card1 
            name={book.title || book.name}            
            des={book.author || book.des}            
            id1={book.isbn || book.id1}             
            available={book.availableCopies ?? 0} 
            total={book.totalCopies ?? 0}
          />
        </div>
      ))}
    </div>
  );
}