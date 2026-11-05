export const config={
  "id": "budget",
  "repo": "budget-template",
  "title": "Everyday Budget",
  "heading": "Know where it goes.",
  "intro": "A simple record of money in, money out and the room between. Manual entries, clear totals.",
  "noun": "transaction",
  "plural": "transactions",
  "titleField": "title",
  "private": true,
  "fields": [
    {
      "key": "title",
      "label": "Description",
      "type": "text",
      "required": true
    },
    {
      "key": "date",
      "label": "Date",
      "type": "date",
      "required": true
    },
    {
      "key": "kind",
      "label": "Type",
      "type": "select",
      "required": true,
      "options": [
        "Income",
        "Expense",
        "Transfer"
      ]
    },
    {
      "key": "category",
      "label": "Category",
      "type": "text",
      "required": true
    },
    {
      "key": "amount",
      "label": "Amount in USD",
      "type": "money",
      "required": true
    },
    {
      "key": "notes",
      "label": "Notes",
      "type": "textarea",
      "required": false
    }
  ],
  "settings": [
    {
      "key": "name",
      "label": "Budget name",
      "default": "Everyday Budget",
      "type": "text",
      "required": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "default": "Know where it goes.",
      "type": "text",
      "required": true
    },
    {
      "key": "about",
      "label": "About this budget",
      "default": "Manual records in USD. Transfers are excluded from income and expenses.",
      "type": "textarea",
      "required": true
    },
    {
      "key": "period",
      "label": "Reporting month",
      "default": "2026-11",
      "type": "month",
      "required": true
    },
    {
      "key": "limits",
      "label": "Monthly category limits in USD",
      "default": "Housing|1000\nFood|300\nTransport|100",
      "type": "textarea",
      "required": true,
      "max": 5000
    },
    {
      "key": "goal",
      "label": "Monthly savings goal in USD",
      "default": "300.00",
      "type": "money",
      "required": true
    }
  ]
};
