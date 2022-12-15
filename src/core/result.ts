export class Result<T> {
  readonly value?: T;
  readonly error?: Error;
  private readonly isSuccess: boolean;
  private readonly isFailure: boolean;

  constructor({ value, error }: { value?: T; error?: Error }) {
    this.value = value;
    this.error = error;
    this.isSuccess = value != undefined;
    this.isFailure = error != undefined;
  }

  when({
    success,
    failure,
  }: {
    success: (data: T) => unknown;
    failure: (error: Error) => unknown;
  }) {
    if (this.isSuccess) {
      return success(this.value as T);
    } else if (this.isFailure) {
      return failure(this.error as Error);
    }
  }
}

// example usage
// function exec(): Result<number> {
//   return new Result({ value: 1 });
// }
//
// export function testResult() {
//   const r = exec();
//   return r.when({
//     success: function (data) {
//       // エンティティに変換
//       return data;
//     },
//     failure: function (error) {
//       if (error instanceof NotFoundError) {
//         // doSomething
//       }
//       return new Result({error:error});
//     },
//   });
// }
