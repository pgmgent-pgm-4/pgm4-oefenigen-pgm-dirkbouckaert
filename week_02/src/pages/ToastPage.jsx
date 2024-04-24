import Toast from '../components/toast-styled/Toast';
import TwToast from '../components/toast-tailwind/TwToast';

const ToastPage = () => {
  return (
    <div className="my-container-no-prose pb-24">
      <h1>Toasts</h1>

      <h2 className="mt-10">Styled components</h2>

      <Toast>This is the default toast message</Toast>
      <Toast success>This is a success message!</Toast>
      <Toast warning>This is a warning message!</Toast>
      <Toast error>This is an error message!</Toast>
      <Toast info>This is an info message.</Toast>

      <h2 className="mt-10">Tailwind components</h2>

      <TwToast>This is the default toast message</TwToast>
      <TwToast outlined>This is the default outlined toast message</TwToast>
      <br />

      <TwToast success title="You did it!">
        This is an outlined success message!
      </TwToast>
      <TwToast success outlined>
        This is a success message!
      </TwToast>
      <TwToast success icon>
        This is a success message with an icon!
      </TwToast>
      <TwToast success icon outlined title="The new user was created.">
        This is an outlined success message with an icon!
      </TwToast>

      <br />
      <TwToast warning>This is a warning message!</TwToast>
      <TwToast warning outlined title="Custom title">
        This is an outlined warning message!
      </TwToast>
      <TwToast warning icon>
        This is a warning message with an icon!
      </TwToast>
      <TwToast warning icon outlined>
        This is an outlined warning message with an icon!
      </TwToast>

      <br />
      <TwToast error>This is an error message!</TwToast>
      <TwToast error outlined>
        This is an outlined error message!
      </TwToast>
      <TwToast error icon>
        This is an error message with an icon!
      </TwToast>
      <TwToast error icon outlined>
        This is an outlined error message with an icon!
      </TwToast>

      <br />
      <TwToast info>This is an info message.</TwToast>
      <TwToast info outlined>
        This is an outlinedinfo message.
      </TwToast>
      <TwToast info icon>
        This is an info message with an icon.
      </TwToast>
      <TwToast info icon outlined>
        This is an outlined info message with an icon.
      </TwToast>
    </div>
  );
};

export default ToastPage;
