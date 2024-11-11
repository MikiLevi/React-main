interface Props {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  )
}

export default PageHeader