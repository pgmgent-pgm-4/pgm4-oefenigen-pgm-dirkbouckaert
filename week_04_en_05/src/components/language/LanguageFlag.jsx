import ReactCountryFlag from 'react-country-flag';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

const LanguageFlag = ({ className }) => {
  const { language } = useLanguageContext();

  return (
    <ReactCountryFlag
      svg
      countryCode={language}
      className={cn('h-6 w-6', className)}
    />
  );
};

export default LanguageFlag;
