interface Props {
  children: any;
}

export function Layout(props: Props) {
  const { children } = props;
  return (
    <main className=" h-screen w-screen  overflow-hidden bg-black flex justify-center items-center">
      <div className="flex flex-col  h-full bg-@gray-bg  w-full max-w-md gap-2">
        {children}
      </div>
    </main>
  );
}
