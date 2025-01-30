interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage = (props: ContainerPageProps) => {
  const { children } = props;

  return (
    <div className="mx-auto mt-40 w-full max-w-6xl px-4 pb-40 md:px-6 md:pb-0">{children}</div>
  );
};

export default ContainerPage;
