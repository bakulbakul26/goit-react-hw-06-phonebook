import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Xxx } from 'components/Filter/Xxx';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container__phonebook}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Xxx />
        <ContactList />
      </Section>
    </div>
  );
};
