const EmojiListItem = ({ emoji }) => {
  return (
    <li
      className="flex basis-full items-center justify-start gap-4 border border-gray-400 p-2 
                 xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 dark:bg-gray-700 dark:text-white "
    >
      <span>{emoji.symbol}</span>
      <span>{emoji.title}</span>
    </li>
  );
};

export default EmojiListItem;
