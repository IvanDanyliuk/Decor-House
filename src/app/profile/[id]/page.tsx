import { getProfileData } from '@/lib/queries/user.queries';
import ProfileDetails from '@/components/profile/ProfileDetails';


const Profile = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const profileData = await getProfileData(id!);

  return (
    <div className='relative w-full pb-6'>
      <section className='py-8 w-full bg-main-bg'>
        <h2 className='container mx-auto page-heading-primary'>
          {profileData.profile.name}
        </h2>
      </section>
      <section className='container mx-auto'>
        <ProfileDetails data={profileData} />
      </section>
    </div>
  );
};

export default Profile;