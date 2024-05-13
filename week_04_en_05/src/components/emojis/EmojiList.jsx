import { useEffect, useState } from 'react';
import emojis from '../../../data/emojis.json';
import EmojiSearch from './EmojiSearch';
import EmojiListItem from './EmojiListItem';

const EmojiList = () => {
  const [filteredEmojis, setFilteredEmojis] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      setFilteredEmojis(emojis);
    } else {
      setFilteredEmojis(
        emojis.filter(
          (emoji) =>
            emoji.title.toLowerCase().includes(search.toLowerCase()) ||
            emoji.symbol.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  if (!emojis) return null;

  return (
    <main>
      <EmojiSearch search={search} setSearch={setSearch} />

      <ul className="my-8 flex w-full flex-wrap justify-center">
        {filteredEmojis &&
          filteredEmojis.map((emoji) => (
            <EmojiListItem key={emoji.title} emoji={emoji} />
          ))}
      </ul>
    </main>
  );
};

export default EmojiList;
