import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCardStore = create(
  persist(
    (set) => ({
      cards: [],
      addCard: (name, brand, code, pin, balance, image) => {
        const id = crypto.randomUUID();
        const date = new Date();
        const newCard = {
          id,
          name,
          brand,
          code,
          pin,
          balance,
          image,
          createdAt: date,
          favorite: false,
        };
        set((state) => ({ cards: [...state.cards, newCard] }));
      },

      updateBalance: (id, balance) =>
        set((state) => ({
          cards: state.cards.map((card) => {
            if (card.id === id) {
              card.balance = balance;
            }
            return card;
          }),

          deleteCard: (id) =>
            set((state) => ({
              cards: state.cards.filter((card) => card.id !== id),
            })),
        })),

      updateFavorite: (id) =>
        set((state) => ({
          cards: state.cards.map((card) => {
            if (card.id === id) {
              card.favorite = !card.favorite;
            }
            return card;
          }),
        })),
    }),
    {
      name: "cards",
    }
  )
);

export default useCardStore;
