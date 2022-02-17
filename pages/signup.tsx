import SEO from '../components/organisms/SEO';
import SignupForm from '../components/organisms/SignupForm';

export default function Signup() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <SEO
          title="Signup - StoreGG"
        />
        <SignupForm />
      </div>
    </section>
  );
}
