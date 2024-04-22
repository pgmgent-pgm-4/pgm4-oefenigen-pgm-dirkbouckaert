import { FaQuoteRight } from 'react-icons/fa';

const QuoteListItem = ({ quote }) => {
  return (
    <li className="relative my-6 block flex w-full flex-col gap-4 rounded bg-gray-100 p-4">
      <FaQuoteRight className="absolute -left-2 -top-2 text-2xl" />
      <p className="text-xl">{quote.content}</p>
      <cite>{quote.cite}</cite>
    </li>
  );
};

export default QuoteListItem;
