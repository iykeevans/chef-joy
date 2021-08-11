import NavigationBar from "./navigation-bar";

function AuthLayout(page) {
  return (
    <>
      <NavigationBar />
      {page}
    </>
  );
}

export default AuthLayout;
