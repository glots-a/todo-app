import classNames from 'classnames';
import { useTodoContext } from '../../context/TodoContext';
import { Options } from '../../types/Options';

export const TodosFilter: React.FC = () => {
  const { status, setStatus } = useTodoContext();

  return (
    <nav className="filter">
      <a
        href="#/"
        className={classNames('filter__link', {
          selected: status === Options.ALL,
        })}
        onClick={() => setStatus(Options.ALL)}
      >
        All
      </a>

      <a
        href="#/active"
        className={classNames('filter__link', {
          selected: status === Options.ACTIVE,
        })}
        onClick={() => setStatus(Options.ACTIVE)}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={classNames('filter__link', {
          selected: status === Options.COMPLETED,
        })}
        onClick={() => setStatus(Options.COMPLETED)}
      >
        Completed
      </a>
    </nav>
  );
};
