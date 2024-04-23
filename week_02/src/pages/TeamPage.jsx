import TeamLeader from '../components/team/TeamLeader';
import TeamMember from '../components/team/TeamMember';
import team from '../data/team.json';

const TeamPage = () => {
  return (
    <div className="h-screen bg-slate-100">
      <div className="my-container-no-prose max-w-[35rem]">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Team Leader</h2>
          {team && <TeamLeader leader={team[0]} />}
        </section>

        <h2 className="text-3xl font-semibold">Team Members</h2>
        {team &&
          team
            .slice(1)
            .map((member) => <TeamMember key={member.id} member={member} />)}
      </div>
    </div>
  );
};

export default TeamPage;
