type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <article className='flex h-full items-center justify-center'>
      {children}
    </article>
  );
};

export default AuthLayout;
