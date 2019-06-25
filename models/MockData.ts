// eslint-disable-next-line no-unused-vars
import { Admin, Employee, Student } from "~/models/User";
import { UserLevels } from "~/models/UserLevels";
// eslint-disable-next-line no-unused-vars
import Issue, {
  // eslint-disable-next-line no-unused-vars
  IssueAction,
  IssueActionType,
  IssueStatus,
  IssueType
} from "~/models/Issue";

const AliAlavi: Student = {
  name: "ali alavi",
  username: "ali_alavi",
  secret: "n/a",
  userLevel: UserLevels.STUDENT,
  createdIssues: []
};

const MohammadAmini: Employee = {
  name: "محمد امینی",
  username: "0021822233",
  secret: "n/a",
  userLevel: UserLevels.EMPLOYEE,
  issuesUnderInvestigation: [],
  jobTitle: "مدیر دبیر خانه"
};
const MehrnooshShamsFard = new Admin(
  "مهرنوش شمس فرد",
  "m.shamsfard",
  "رئیس دانشکده کامپیوتر"
);

const loremFarsi: string =
  "لورم ایپسوم متن ساختگی با تولید" +
  " سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها" +
  " و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط " +
  "فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی " +
  "می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان " +
  "جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان" +
  " رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.";

const issueArray: Array<Issue> = [
  {
    relatingStudent: AliAlavi,
    issueStatus: IssueStatus.OPEN,
    issueType: IssueType.COMPLAINT,
    title: "اعتراض 1",
    issueDescription: loremFarsi,
    creationDate: new Date(),
    relatingEmployee: MohammadAmini,
    issueId: 1,
    actions: []
  },
  {
    relatingStudent: AliAlavi,
    issueStatus: IssueStatus.CLOSED,
    issueType: IssueType.CRITICISM,
    title: "انتقاد 2",
    issueDescription: loremFarsi,
    creationDate: new Date(2019, 3, 21, 17, 25),
    relatingEmployee: MohammadAmini,
    attachment: "http://yesno.wtf/api",
    issueId: 2,
    actions: []
  },
  {
    relatingStudent: AliAlavi,
    issueStatus: IssueStatus.IN_QUEUE,
    issueType: IssueType.DEMANDS,
    title: "درخواست 3 یکمی طولانی تر خب ببینیم چی میشه آقا",
    issueDescription: loremFarsi,
    creationDate: new Date(2019, 4, 21, 17, 25),
    issueId: 3,
    actions: []
  },
  {
    relatingStudent: AliAlavi,
    issueStatus: IssueStatus.POSTPONED,
    issueType: IssueType.PROPOSALS,
    title:
      "پیشنهاد خیلی خوبی دارم ولی همشو تو تیتر مینویسم هیچیشو تو متن نمیونیسم",
    issueDescription: "",
    creationDate: new Date(2019, 3, 21, 17, 25),
    relatingEmployee: MohammadAmini,
    issueId: 4,
    actions: []
  }
];

const actionArray: Array<IssueAction> = [
  {
    correspondingIssue: issueArray[3],
    date: new Date(2019, 3, 21, 17, 25),
    index: 0,
    type: { type: IssueActionType.CREATED },
    byWho: AliAlavi,
    toWho: MohammadAmini
  },
  {
    correspondingIssue: issueArray[3],
    date: new Date(2019, 3, 22, 17, 25),
    index: 0,
    type: { type: IssueActionType.REFERRED },
    byWho: MohammadAmini,
    toWho: MehrnooshShamsFard
  },
  {
    correspondingIssue: issueArray[3],
    date: new Date(2019, 3, 23, 17, 25),
    index: 0,
    type: { type: IssueActionType.POSTPONED },
    byWho: MehrnooshShamsFard
  }
];

const actionArray2: Array<IssueAction> = [
  {
    correspondingIssue: issueArray[1],
    date: new Date(2019, 3, 21, 17, 25),
    index: 0,
    type: { type: IssueActionType.CREATED },
    byWho: AliAlavi,
    toWho: MohammadAmini
  },
  {
    correspondingIssue: issueArray[1],
    date: new Date(2019, 3, 22, 17, 25),
    index: 1,
    type: { type: IssueActionType.CLOSED },
    byWho: MohammadAmini
  }
];

issueArray[3].actions = actionArray;
issueArray[1].actions = actionArray2;

AliAlavi.createdIssues = issueArray;
MohammadAmini.issuesUnderInvestigation = issueArray;

export {
  AliAlavi,
  issueArray,
  MohammadAmini,
  MehrnooshShamsFard,
  actionArray,
  actionArray2
};
