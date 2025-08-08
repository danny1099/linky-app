
export const Logo = () => {
  return (
    <picture className="flex flex-row items-center">
      <source srcSet="/images/img-linky-app-dark.svg" media="(prefers-color-scheme: dark)" />
      <img
        src="/images/img-linky-app.svg"
        alt="Logo of DoIt Task Manager"
        className="w-6 h-6 md:w-8 md:h-8"
        loading="eager"
      />
    </picture>
  );
}