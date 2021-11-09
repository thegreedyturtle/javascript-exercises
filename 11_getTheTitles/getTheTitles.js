const getTheTitles = function(bookIn) {
    let output = [];
    for (let i = 0; i<bookIn.length; i++) {
        output.push(`${bookIn[i]['title']}`);
    }
    return output;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

// Do not edit below this line
module.exports = getTheTitles;