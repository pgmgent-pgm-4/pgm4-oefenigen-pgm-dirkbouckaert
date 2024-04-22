import QuoteListItem from './QuoteListItem';

const QuoteList = ({ quotes }) => {
  return (
    <ul>
      {quotes.map((quote, index) => (
        <QuoteListItem key={index} quote={quote} />
      ))}
    </ul>
  );
};

export default QuoteList;
