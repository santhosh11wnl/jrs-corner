
interface CategoryHeaderProps {
  title: string;
  description: string;
}

const CategoryHeader = ({ title, description }: CategoryHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-diner text-pitstop-darkblue mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default CategoryHeader;
