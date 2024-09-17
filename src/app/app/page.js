"use client";
import Image from "next/image";
import Modal from "../components/generic/Modal";
import NewNoteForm from "../components/notes/NewNoteForm";

export default function Home() {
  return (
    <div>
      <Modal show={true} onCloseButtonClick={() => {}} title="New Note">
        <NewNoteForm />
      </Modal>
      <div className="flex flex-wrap justify-between gap-3">
        <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Your Dashboard
        </p>
      </div>
      <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4">
        You have 3 projects in progress and 2 archived. You've written 12 notes
        this week.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              The Art of Memoir
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              50% complete 4 notes
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Last updated 2 days ago
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              My Life's Journey
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              10% complete 2 notes
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Last updated 1 week ago
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              A Collection of Short Stories
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              25% complete 3 notes
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Last updated 5 days ago
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              The Power of Storytelling
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              75% complete 5 notes
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Last updated 3 days ago
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              A Journey to the Unknown
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              5% complete 1 note
            </p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Last updated 1 day ago
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-4 py-3">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">New project</span>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>test</p>
    </div>
  );
}
