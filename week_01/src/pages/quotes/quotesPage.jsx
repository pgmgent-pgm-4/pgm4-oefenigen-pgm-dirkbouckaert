import quotes from '../../data/quotes';
import QuoteList from '../../components/QuoteList';

const QuotesPage = () => {
  return (
    <div
      className="container mx-auto mt-8  flex w-[calc(100vw-4rem)] 
                 max-w-2xl flex-wrap items-stretch justify-center gap-6"
    >
      {quotes && <QuoteList quotes={quotes} />}
    </div>
  );
};

export default QuotesPage;
