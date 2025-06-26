const Overview = () => {
  return (
    <div className="mt-75 grid grid-cols-2 m-25 gap-y-2 gap-x-4">
      <div className="bg-green-100">
        <p>Expenses</p>
        <div className="flex flex-row">
            <p>Kuva</p>
            <p>listaus</p>
        
        </div>
        <p className="justify-self-end">+</p>
      </div>

      <div className="bg-green-100">
        <p>Income</p>
        <div className="flex flex-row">
            <p>Kuva</p>
            <p>listaus</p>
        
        </div>
        <p className="justify-self-end">+</p>
      </div>

      <div className="bg-green-100">
        <p>Budgets</p>
        <div className="flex flex-col items-center">
            <p>Legend</p>
            <p>kuvaajat</p>
            <p>See all</p>

        </div>
      </div>

      <div className="bg-green-100">
        <p>Savings</p>
        <div className="flex flex-row">
            <p className="">kuvaaja</p>
            <div>
                <p>saved amount</p>
                <p>reached goal</p>
                <p>message</p>
                <p>+</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
