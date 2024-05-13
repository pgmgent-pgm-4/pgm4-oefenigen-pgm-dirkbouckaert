import EmojiList from '../../components/emojis/EmojiList';

const EmojiPage = () => {
  return (
    <div className="app-container">
      <h1 className="mb-4 text-3xl font-semibold">Emojis</h1>

      <EmojiList />
    </div>
  );
};

export default EmojiPage;
