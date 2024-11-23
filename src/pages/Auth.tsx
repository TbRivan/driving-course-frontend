import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore, AuthStoreType } from "@/store/auth-store";
import { LoaderPinwheel } from "lucide-react";

function Auth() {
  const { email, password, setEmail, setPassword }: AuthStoreType =
    useAuthStore();

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value;
    setEmail(value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value;
    setPassword(value);
  }

  function handleSubmitLogin() {}

  return (
    <div className="flex h-screen p-4 ">
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center bg-no-repeat border rounded-tl-lg rounded-bl-lg"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/car-navigates-traffic-cones-vital-component-driving-license-test-vertical-mobile-wallpape_896558-18042.jpg')",
        }}
      >
        <div className="ml-5 mt-5 flex ">
          <LoaderPinwheel color="white" size={40} />
          <h1 className="ml-2 text-3xl font-bold text-white">Wheel Wise</h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-8">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight">
              Login ke akunmu
            </h1>
            <h1 className="text-1xl mt-2">
              Masukkan email dan password untuk melanjutkan
            </h1>
            <div className="mt-8">
              <Input
                className="mb-4"
                placeholder="example@mail.com"
                value={email}
                onChange={handleEmailChange}
              />
              <Input
                className="mb-4"
                placeholder="********"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button
                className="mb-4 w-full"
                variant="default"
                onClick={handleSubmitLogin}
              >
                Login
              </Button>
              <p className="w-80">
                Dengan mengklik login, anda menyetujui Terms of Service dan
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
