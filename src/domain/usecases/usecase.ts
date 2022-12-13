export interface UseCase<T, Param> {
  execute(param: Param): T;
}
