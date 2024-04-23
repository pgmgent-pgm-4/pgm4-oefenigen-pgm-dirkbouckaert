import styles from './TeamMember.module.css';

const TeamMember = ({ member }) => {
  const { firstname, lastname, department, email, phone, avatar } = member;
  return (
    <article className={styles.card}>
      <img
        src={avatar}
        alt={`${firstname} ${lastname}`}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>
          {firstname} {lastname}
        </h3>
        <p className={styles.department}>{department}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.phone}>{phone}</p>
      </div>
    </article>
  );
};

export default TeamMember;
