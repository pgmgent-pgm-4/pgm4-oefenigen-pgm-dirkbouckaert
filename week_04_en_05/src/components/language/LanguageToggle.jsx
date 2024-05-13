import { useLanguageContext } from '../../contexts/LanguageContext';
import { LANGUAGES } from '../../lib/consts';
import LanguageFlag from './LanguageFlag';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguageContext();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="app-container flex justify-between">
      <LanguageFlag className="h-12 w-12" />

      <select className="py-1 text-sm" value={language} onChange={handleChange}>
        {LANGUAGES.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageToggle;
