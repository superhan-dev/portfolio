import { HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../../constants/error.constant';

interface ErrorResponse {
  message: string;
  statusCode: HttpStatus;
}

export const CUSTOM_RESPONSE: Record<ErrorCode, ErrorResponse> = {
  [ErrorCode.BAD_REQUEST]: {
    message: '유효하지 않은 파라미터를 사용한 요청',
    statusCode: HttpStatus.BAD_REQUEST,
  },
  [ErrorCode.LOG_CREATE_FAILED]: {
    message: '데이터베이스에 로그 생성 실패',
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  [ErrorCode.STATISTICS_CREATE_FAILED]: {
    message: '데이터베이스에 일간 통계 생성 실패',
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  [ErrorCode.STATISTICS_COUNT_RESET_FAILED]: {
    message: '데이터베이스의 statistics_today 테이블 clickCount 초기화 실패',
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  [ErrorCode.CREATE_PROJECT_FAILED]: {
    message: '프로젝트 생성 실패',
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  },
};
