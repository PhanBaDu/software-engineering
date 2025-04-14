import Product from '@/features/components/product';
import Filter from '@/features/search/components/filter';
import SearchResults from '@/features/search/components/search-results';
import Advertisement from '@/features/search/components/shop-ad';

export default function Search() {
  return (
    <div className="flex gap-5 justify-between">
      <div className="w-2/12 rounded border border-dashed p-2 bg-background">
        <Filter />
      </div>
      <div className="w-10/12 flex flex-col gap-5">
        <div className="border border-dashed border-primary p-2 rounded bg-background">
          <Advertisement />
        </div>
        <div className="border border-dashed border-primary p-2 rounded bg-background">
          <SearchResults />
          <div className="grid grid-cols-5 gap-2 pt-2">
            <Product ad={true} />
            <Product ad={true} />
            <Product ad={true} />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
