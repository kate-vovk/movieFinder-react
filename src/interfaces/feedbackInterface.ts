export interface IFeedback {
  id: string;
  filmId: string;
  title: string;
  releaseDate: string;
  comment: string;
  date: string;
}

export interface IFeedbackData {
  title: string;
  feedbackDataList: IFeedback[];
}
