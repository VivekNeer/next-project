import React from 'react'
import Form from "next/form";
// import {Simulate} from "react-dom/test-utils";
// import reset = Simulate.reset;
import SearchFormReset from "@/components/SearchFormReset";
import {Search} from "lucide-react";

const SearchForm = ({query}:{query?:string}) => {
    return (
        <Form action="/public" scroll={false} className="search-form">
            <input name="query" defaultValue={query} placeholder="Search..." className="search-input" />
            <div className="flex-gap-2 flex flex-row items-center gap-3">
                {query && <SearchFormReset />}
                <button type="submit" className="search-btn text-white">
                    <Search className="size-5" />
                </button>
            </div>
        </Form>
    )
}
export default SearchForm
